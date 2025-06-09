interface FooterProps {
  currentPage: number;
  totalPages: number;
}

const Footer = ({ currentPage, totalPages }: FooterProps) => (
  <div className="text-center mt-8 text-gray-500 text-sm">
    <p>Page {currentPage + 1} of {totalPages}</p>
  </div>
);

export default Footer;