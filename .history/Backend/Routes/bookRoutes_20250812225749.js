/ public
router.get('/', bookCtrl.getBooks);
router.get('/:id', bookCtrl.getBook);

// admin protected: create, update, delete
router.post('/', auth('admin'), bookCtrl.createBook);
router.put('/:id', auth('admin'), bookCtrl.updateBook);
router.delete('/:id', auth('admin'), bookCtrl.deleteBook);
 