const Footer = () => {
    return (
        <footer>
            &copy; {new Date().getFullYear()} Nontuthuzelo Mtolo. All rights reserved.
            <div>
                <a href="https://www.linkedin.com/in/nontuthuzelo-mtolo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/NontuthuzeloM24" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:mtolonontuthuzelo4@gmail.com">Email</a>
                <div><a href="#hero" class="footer-link">Back to top ↑</a></div>
            </div>
        </footer>
    );
};

export default Footer;