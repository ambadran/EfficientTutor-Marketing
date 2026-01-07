export function renderNav() {
    const navRoot = document.getElementById('nav-root');
    if (!navRoot) return;

    const currentPath = window.location.pathname;
    const isLinkActive = (path) => {
        if (path === '/' && (currentPath === '/' || currentPath === '/index.html')) return true;
        return currentPath.includes(path);
    };

    navRoot.innerHTML = `
        <nav class="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <div class="flex items-center">
                        <a href="/" class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            EfficientTutor
                        </a>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-8">
                            <a href="/" class="${isLinkActive('/') ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-300 hover:text-white'} px-1 py-2 text-sm font-medium transition-colors">Home</a>
                            <a href="/tutorials.html" class="${isLinkActive('tutorials.html') ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-300 hover:text-white'} px-1 py-2 text-sm font-medium transition-colors">Tutorials</a>
                            <a href="/privacy.html" class="${isLinkActive('privacy.html') ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-slate-300 hover:text-white'} px-1 py-2 text-sm font-medium transition-colors">Privacy</a>
                        </div>
                    </div>
                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="text-slate-400 hover:text-white p-2">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile menu, show/hide based on menu state. -->
            <div id="mobile-menu" class="hidden md:hidden border-t border-slate-800 bg-slate-900">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" class="block px-3 py-2 rounded-md text-base font-medium ${isLinkActive('/') ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}">Home</a>
                    <a href="/tutorials.html" class="block px-3 py-2 rounded-md text-base font-medium ${isLinkActive('tutorials.html') ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}">Tutorials</a>
                    <a href="/privacy.html" class="block px-3 py-2 rounded-md text-base font-medium ${isLinkActive('privacy.html') ? 'bg-slate-800 text-emerald-400' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}">Privacy</a>
                </div>
            </div>
        </nav>
    `;

    // Mobile menu toggle logic
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

export function renderFooter() {
    const footerRoot = document.getElementById('footer-root');
    if (!footerRoot) return;

    footerRoot.innerHTML = `
        <footer class="bg-slate-900 border-t border-slate-800 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-4">EfficientTutor</h3>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Empowering students and tutors with intelligent scheduling and resource management tools for the modern educational landscape.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-white font-medium mb-4">Quick Links</h4>
                        <ul class="space-y-2 text-sm text-slate-400">
                            <li><a href="/" class="hover:text-emerald-400 transition-colors">Home</a></li>
                            <li><a href="/tutorials.html" class="hover:text-emerald-400 transition-colors">Tutorials</a></li>
                            <li><a href="/privacy.html" class="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-medium mb-4">Contact</h4>
                        <p class="text-sm text-slate-400">
                            Questions? Reach out to us at <br>
                            <a href="mailto:support@efficienttutor.com" class="text-emerald-400 hover:underline">support@efficienttutor.com</a>
                        </p>
                    </div>
                </div>
                <div class="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    &copy; ${new Date().getFullYear()} EfficientTutor. All rights reserved.
                </div>
            </div>
        </footer>
    `;
}
