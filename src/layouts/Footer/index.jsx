function Footer({ content, contact }) {
  return (
    <footer className="bg-gray-200">
      <div className="bg-primary h-1 w-full" />
      <div className="container items-center">
        <span className="text-base font-light">Contact us : {contact}</span>
        <h2 className="text-base font-light text-center">{content}</h2>
      </div>
    </footer>
  );
}

export default Footer;
