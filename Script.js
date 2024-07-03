document.addEventListener('DOMContentLoaded', function () {
            const sectionHeaders = document.querySelectorAll('.section h2');

            sectionHeaders.forEach(header => {
                header.addEventListener('click', function () {
                    const sectionContent = this.nextElementSibling;
                    const isActive = sectionContent.classList.toggle('active');

                    // Adjust height to auto when expanded for smooth transition
                    // if (sectionContent.classList.contains('active')) {
                    //     sectionContent.style.height = sectionContent.scrollHeight + 'px';
                    // } else {
                    //     sectionContent.style.height = '0';
                    // }

                    // Scroll to the middle of the section content only when expanding
                    if (isActive) {
                        const offset = this.getBoundingClientRect().top + window.pageYOffset - 20; // 20px space above the section header
                        window.scrollTo({
                            top: offset,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            const yearSpan = document.getElementById('current-year');
            yearSpan.textContent = new Date().getFullYear();
        });