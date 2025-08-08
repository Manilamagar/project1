import React from 'react';

const Home = () => {
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: '#2c3e50' }}>INC Pustakalay</h1>
                <p style={{ color: '#34495e', fontSize: '1.2rem' }}>
                    Welcome to INC Pustakalay, your digital library for exploring and discovering books!
                </p>
            </header>
            <section style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(44,62,80,0.08)' }}>
                <h2 style={{ color: '#2980b9' }}>Explore Our Collection</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>📚 Browse books by category</li>
                    <li>🔍 Search for your favorite titles</li>
                    <li>📝 Read reviews and recommendations</li>
                </ul>
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <button style={{
                        background: '#2980b9',
                        color: '#fff',
                        border: 'none',
                        padding: '0.75rem 2rem',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}>
                        Start Exploring
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;