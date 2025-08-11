import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Users, Calendar, DollarSign, Plus, Edit, Trash, Eye, AlertCircle, Check, X } from 'lucide-react';

const VedaLibraryApp = () => {
  const [currentView, setCurrentView] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([
    { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'Administrator' },
    { id: 2, username: 'librarian1', password: 'lib123', role: 'librarian', name: 'John Librarian' },
    { id: 3, username: 'student1', password: 'stu123', role: 'user', name: 'Alice Student' }
  ]);
  
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Introduction to Programming',
      author: 'John Smith',
      isbn: '978-0123456789',
      category: 'Technology',
      copies: 5,
      available: 3,
      borrowedBy: [
        { userId: 3, borrowDate: '2024-01-15', dueDate: '2024-02-15', returned: false }
      ]
    },
    {
      id: 2,
      title: 'Data Structures',
      author: 'Jane Doe',
      isbn: '978-0987654321',
      category: 'Technology',
      copies: 3,
      available: 2,
      borrowedBy: [
        { userId: 3, borrowDate: '2024-01-10', dueDate: '2024-02-10', returned: false }
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  
  // Form states
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ username: '', password: '', name: '', role: 'user' });
  const [bookForm, setBookForm] = useState({ title: '', author: '', isbn: '', category: '', copies: 1 });

  // Authentication
  const handleLogin = () => {
    const user = users.find(u => u.username === loginForm.username && u.password === loginForm.password);
    if (user) {
      setCurrentUser(user);
      setCurrentView(user.role === 'user' ? 'user-dashboard' : 'dashboard');
      setLoginForm({ username: '', password: '' });
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleRegister = () => {
    if (!registerForm.username || !registerForm.password || !registerForm.name) {
      alert('Please fill all fields!');
      return;
    }
    
    if (users.find(u => u.username === registerForm.username)) {
      alert('Username already exists!');
      return;
    }

    const newUser = {
      id: users.length + 1,
      ...registerForm
    };
    setUsers([...users, newUser]);
    alert('Registration successful!');
    setCurrentView('login');
    setRegisterForm({ username: '', password: '', name: '', role: 'user' });
  };

  const logout = () => {
    setCurrentUser(null);
    setCurrentView('login');
  };

  // Book Management
  const addBook = () => {
    if (!bookForm.title || !bookForm.author || !bookForm.isbn) {
      alert('Please fill all required fields!');
      return;
    }

    const newBook = {
      id: books.length + 1,
      ...bookForm,
      copies: parseInt(bookForm.copies),
      available: parseInt(bookForm.copies),
      borrowedBy: []
    };
    
    setBooks([...books, newBook]);
    setBookForm({ title: '', author: '', isbn: '', category: '', copies: 1 });
    setShowModal(false);
    alert('Book added successfully!');
  };

  const editBook = () => {
    const updatedBooks = books.map(book => 
      book.id === selectedBook.id 
        ? { ...book, ...bookForm, copies: parseInt(bookForm.copies) }
        : book
    );
    setBooks(updatedBooks);
    setShowModal(false);
    alert('Book updated successfully!');
  };

  const deleteBook = (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== bookId));
    }
  };

  const borrowBook = (bookId) => {
    const book = books.find(b => b.id === bookId);
    if (book.available > 0) {
      const borrowDate = new Date().toISOString().split('T')[0];
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 14); // 2 weeks borrowing period
      
      const updatedBooks = books.map(b => 
        b.id === bookId 
          ? {
              ...b,
              available: b.available - 1,
              borrowedBy: [...b.borrowedBy, {
                userId: currentUser.id,
                borrowDate,
                dueDate: dueDate.toISOString().split('T')[0],
                returned: false
              }]
            }
          : b
      );
      setBooks(updatedBooks);
      alert('Book borrowed successfully!');
    } else {
      alert('No copies available!');
    }
  };

  const returnBook = (bookId, isDamaged = false) => {
    const book = books.find(b => b.id === bookId);
    const borrowRecord = book.borrowedBy.find(br => br.userId === currentUser.id && !br.returned);
    
    if (borrowRecord) {
      const returnDate = new Date();
      const dueDate = new Date(borrowRecord.dueDate);
      const isLate = returnDate > dueDate;
      const daysLate = isLate ? Math.ceil((returnDate - dueDate) / (1000 * 60 * 60 * 24)) : 0;
      
      let fine = 0;
      if (isLate) fine += daysLate * 5; // $5 per day late
      if (isDamaged) fine += 50; // $50 for damaged book
      
      const updatedBooks = books.map(b => 
        b.id === bookId 
          ? {
              ...b,
              available: b.available + 1,
              borrowedBy: b.borrowedBy.map(br => 
                br.userId === currentUser.id && !br.returned
                  ? { ...br, returned: true, returnDate: returnDate.toISOString().split('T')[0], fine, isDamaged }
                  : br
              )
            }
          : b
      );
      
      setBooks(updatedBooks);
      
      if (fine > 0) {
        alert(`Book returned with fine: $${fine}${isLate ? ` (${daysLate} days late)` : ''}${isDamaged ? ' (damaged)' : ''}`);
      } else {
        alert('Book returned successfully!');
      }
    }
  };

  // Filter books based on search
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get user's borrowed books
  const getUserBorrowedBooks = () => {
    return books.filter(book => 
      book.borrowedBy.some(br => br.userId === currentUser.id && !br.returned)
    );
  };

  // Get user's fines
  const getUserFines = () => {
    let totalFines = 0;
    books.forEach(book => {
      book.borrowedBy.forEach(br => {
        if (br.userId === currentUser.id && br.fine) {
          totalFines += br.fine;
        }
      });
    });
    return totalFines;
  };

  // Modal handlers
  const openModal = (type, book = null) => {
    setModalType(type);
    setSelectedBook(book);
    if (book && type === 'edit') {
      setBookForm({
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        category: book.category,
        copies: book.copies
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setBookForm({ title: '', author: '', isbn: '', category: '', copies: 1 });
    setSelectedBook(null);
  };

  // Login/Register View
  if (currentView === 'login' || currentView === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <BookOpen className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Veda Library</h1>
            <p className="text-gray-600 mt-2">Management System</p>
          </div>

          {currentView === 'login' ? (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                />
                <button
                  onClick={handleLogin}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                  Login
                </button>
              </div>
              <p className="text-center mt-6">
                Don't have an account?{' '}
                <button
                  onClick={() => setCurrentView('register')}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Register
                </button>
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={registerForm.username}
                  onChange={(e) => setRegisterForm({...registerForm, username: e.target.value})}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                />
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={registerForm.role}
                  onChange={(e) => setRegisterForm({...registerForm, role: e.target.value})}
                >
                  <option value="user">Student/User</option>
                  <option value="librarian">Librarian</option>
                </select>
                <button
                  onClick={handleRegister}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Register
                </button>
              </div>
              <p className="text-center mt-6">
                Already have an account?{' '}
                <button
                  onClick={() => setCurrentView('login')}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Login
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // User Dashboard
  if (currentView === 'user-dashboard') {
    const borrowedBooks = getUserBorrowedBooks();
    const totalFines = getUserFines();

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">Veda Library</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {currentUser.name}</span>
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Books Borrowed</p>
                  <p className="text-2xl font-bold text-gray-900">{borrowedBooks.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Fines</p>
                  <p className="text-2xl font-bold text-gray-900">${totalFines}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Available Books</p>
                  <p className="text-2xl font-bold text-gray-900">{books.reduce((sum, book) => sum + book.available, 0)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search Books */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Search Books</h2>
            <div className="flex items-center space-x-4 mb-6">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, author, or category..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBooks.map((book) => (
                <div key={book.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-1">By: {book.author}</p>
                  <p className="text-gray-600 mb-1">Category: {book.category}</p>
                  <p className="text-gray-600 mb-3">Available: {book.available}/{book.copies}</p>
                  <button
                    onClick={() => borrowBook(book.id)}
                    disabled={book.available === 0}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {book.available === 0 ? 'Not Available' : 'Borrow Book'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* My Borrowed Books */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">My Borrowed Books</h2>
            {borrowedBooks.length === 0 ? (
              <p className="text-gray-600">No books currently borrowed.</p>
            ) : (
              <div className="space-y-4">
                {borrowedBooks.map((book) => {
                  const borrowRecord = book.borrowedBy.find(br => br.userId === currentUser.id && !br.returned);
                  const dueDate = new Date(borrowRecord.dueDate);
                  const isOverdue = new Date() > dueDate;
                  
                  return (
                    <div key={book.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{book.title}</h3>
                          <p className="text-gray-600">By: {book.author}</p>
                          <p className="text-gray-600">Borrowed: {borrowRecord.borrowDate}</p>
                          <p className={`font-medium ${isOverdue ? 'text-red-600' : 'text-gray-600'}`}>
                            Due: {borrowRecord.dueDate} {isOverdue && '(Overdue)'}
                          </p>
                        </div>
                        <div className="space-x-2">
                          <button
                            onClick={() => returnBook(book.id, false)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                          >
                            Return (Good)
                          </button>
                          <button
                            onClick={() => returnBook(book.id, true)}
                            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                          >
                            Return (Damaged)
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Admin/Librarian Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Veda Library - Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {currentUser.name} ({currentUser.role})</span>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Books</p>
                <p className="text-2xl font-bold text-gray-900">{books.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === 'user').length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Books Borrowed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {books.reduce((sum, book) => sum + book.borrowedBy.filter(br => !br.returned).length, 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Fines</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${books.reduce((sum, book) => 
                    sum + book.borrowedBy.reduce((fineSum, br) => fineSum + (br.fine || 0), 0), 0
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Book Management */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Book Management</h2>
            <button
              onClick={() => openModal('add')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add Book</span>
            </button>
          </div>

          {/* Search */}
          <div className="flex items-center space-x-4 mb-6">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search books..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Books Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Info</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Copies</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBooks.map((book) => (
                  <tr key={book.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{book.title}</div>
                        <div className="text-sm text-gray-500">by {book.author}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.isbn}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.available}/{book.copies}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        book.available > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {book.available > 0 ? 'Available' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => openModal('view', book)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => openModal('edit', book)}
                        className="text-yellow-600 hover:text-yellow-900"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteBook(book.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Borrowed Books Tracking */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Borrowed Books Tracking</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrower</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrow Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fine</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {books.map((book) => 
                  book.borrowedBy.filter(br => !br.returned).map((borrowRecord) => {
                    const borrower = users.find(u => u.id === borrowRecord.userId);
                    const dueDate = new Date(borrowRecord.dueDate);
                    const isOverdue = new Date() > dueDate;
                    
                    return (
                      <tr key={`${book.id}-${borrowRecord.userId}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{book.title}</div>
                          <div className="text-sm text-gray-500">by {book.author}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {borrower?.name || 'Unknown User'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {borrowRecord.borrowDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {borrowRecord.dueDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            isOverdue ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {isOverdue ? 'Overdue' : 'Active'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${borrowRecord.fine || 0}
                        </td>
                      </tr>
                    );
                  })
                ).flat()}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {modalType === 'add' && 'Add New Book'}
                {modalType === 'edit' && 'Edit Book'}
                {modalType === 'view' && 'Book Details'}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>

            {modalType === 'view' ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <p className="text-gray-900">{selectedBook.title}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Author</label>
                  <p className="text-gray-900">{selectedBook.author}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ISBN</label>
                  <p className="text-gray-900">{selectedBook.isbn}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <p className="text-gray-900">{selectedBook.category}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Copies</label>
                  <p className="text-gray-900">{selectedBook.available}/{selectedBook.copies}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Book Title *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={bookForm.title}
                  onChange={(e) => setBookForm({...bookForm, title: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Author *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={bookForm.author}
                  onChange={(e) => setBookForm({...bookForm, author: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="ISBN *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={bookForm.isbn}
                  onChange={(e) => setBookForm({...bookForm, isbn: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={bookForm.category}
                  onChange={(e) => setBookForm({...bookForm, category: e.target.value})}
                />
                <input
                  type="number"
                  placeholder="Number of Copies"
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={bookForm.copies}
                  onChange={(e) => setBookForm({...bookForm, copies: e.target.value})}
                />
                <div className="flex space-x-3">
                  <button
                    onClick={modalType === 'add' ? addBook : editBook}
                    className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                  >
                    {modalType === 'add' ? 'Add Book' : 'Update Book'}
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VedaLibraryApp;