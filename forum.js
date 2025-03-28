document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const newTopicBtn = document.querySelector('.new-topic-btn');
    const contactBtn = document.querySelector('.contact-btn');
    const discussionModal = document.getElementById('discussionModal');
    const contactModal = document.getElementById('contactModal');
    const closeModals = document.querySelectorAll('.close-modal');
    
    // Sample discussions data
    let discussions = [
        {
            id: 1,
            title: "How to talk about consent with a partner",
            author: "Jamie Doe",
            initials: "JD",
            date: "2 days ago",
            category: "Health",
            excerpt: "I'm struggling with how to initiate conversations about boundaries and consent with my new partner. Any advice on making this conversation comfortable for both of us?",
            comments: 14,
            likes: 28,
            featured: false
        },
        {
            id: 2,
            title: "The importance of sexual health education",
            author: "Alex Doe",
            initials: "AD",
            date: "1 week ago",
            category: "Education",
            excerpt: "Comprehensive sex education reduces STI rates and unplanned pregnancies. Let's discuss how we can advocate for better programs in schools.",
            comments: 42,
            likes: 87,
            featured: true
        },
        {
            id: 3,
            title: "Tips for safe sex practices",
            author: "Sam Doe",
            initials: "SD",
            date: "3 days ago",
            category: "Safety",
            excerpt: "Beyond condoms, what are some often overlooked aspects of safe sex that people should be aware of? Let's share our best practices.",
            comments: 19,
            likes: 35,
            featured: false
        },
        {
            id: 4,
            title: "Understanding LGBTQ+ relationships",
            author: "Taylor Doe",
            initials: "TD",
            date: "5 days ago",
            category: "LGBTQ+",
            excerpt: "I'd like to learn more about LGBTQ+ relationships and how they differ from or are similar to heterosexual relationships. Any resources or personal experiences to share?",
            comments: 31,
            likes: 52,
            featured: true
        },
        {
            id: 5,
            title: "Dealing with peer pressure",
            author: "Casey Doe",
            initials: "CD",
            date: "1 day ago",
            category: "Relationships",
            excerpt: "How do you handle situations where friends or partners pressure you into things you're not comfortable with? Looking for practical advice.",
            comments: 8,
            likes: 23,
            featured: false
        }
    ];

    // Open Discussion Modal
    if (newTopicBtn && discussionModal) {
        newTopicBtn.addEventListener('click', () => {
            discussionModal.style.display = 'flex';
            setTimeout(() => {
                discussionModal.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Open Contact Modal
    if (contactBtn && contactModal) {
        contactBtn.addEventListener('click', () => {
            contactModal.style.display = 'flex';
            setTimeout(() => {
                contactModal.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close Modals
    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-overlay').forEach(modal => {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            });
            document.body.style.overflow = '';
        });
    });
    
    // Close when clicking outside modal
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            }
        });
    });

    // Handle new discussion form submission
    const newDiscussionForm = document.getElementById('newDiscussionForm');
    if (newDiscussionForm) {
        newDiscussionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('topic-title').value;
            const category = document.getElementById('topic-category').value;
            const content = document.getElementById('topic-content').value;
            
            // Create new discussion
            const newDiscussion = {
                id: discussions.length + 1,
                title: title,
                author: "You",
                initials: "YO",
                date: "Just now",
                category: category,
                excerpt: content.length > 100 ? content.substring(0, 100) + "..." : content,
                comments: 0,
                likes: 0,
                featured: false
            };
            
            discussions.unshift(newDiscussion);
            renderDiscussions();
            
            // Reset form and close modal
            newDiscussionForm.reset();
            discussionModal.classList.remove('show');
            setTimeout(() => {
                discussionModal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Your discussion has been posted!';
            document.body.appendChild(successMsg);
            
            setTimeout(() => {
                successMsg.classList.add('show');
                setTimeout(() => {
                    successMsg.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(successMsg);
                    }, 300);
                }, 3000);
            }, 10);
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            contactForm.reset();
            contactModal.classList.remove('show');
            setTimeout(() => {
                contactModal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message. We will contact you soon.';
            document.body.appendChild(successMsg);
            
            setTimeout(() => {
                successMsg.classList.add('show');
                setTimeout(() => {
                    successMsg.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(successMsg);
                    }, 300);
                }, 3000);
            }, 10);
        });
    }

    // Render discussions to the page
    function renderDiscussions() {
        const discussionList = document.querySelector('.discussion-list');
        if (discussionList) {
            discussionList.innerHTML = '';
            
            discussions.forEach((discussion, index) => {
                const discussionCard = document.createElement('article');
                discussionCard.className = `discussion-card ${discussion.featured ? 'featured' : ''}`;
                discussionCard.style.animationDelay = `${index * 0.1}s`;
                
                discussionCard.innerHTML = `
                    <div class="card-header">
                        <div class="user-info">
                            <div class="avatar">${discussion.initials}</div>
                            <div>
                                <h3>${discussion.title}</h3>
                                <p class="meta">Posted by <span>${discussion.author}</span> • ${discussion.date} • <span class="tag ${discussion.category.toLowerCase()}">${discussion.category}</span></p>
                            </div>
                        </div>
                        <div class="stats">
                            <span><i class="fas fa-comment"></i> ${discussion.comments}</span>
                            <span><i class="fas fa-heart"></i> ${discussion.likes}</span>
                        </div>
                    </div>
                    <p class="excerpt">${discussion.excerpt}</p>
                    <a href="#" class="read-more">Continue reading <i class="fas fa-arrow-right"></i></a>
                `;
                
                discussionList.appendChild(discussionCard);
            });
        }
    }

    // Initial render
    renderDiscussions();

    // Add success message styles
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #4CAF50;
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 3000;
        }
        .success-message.show {
            opacity: 1;
        }
        .success-message i {
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
});