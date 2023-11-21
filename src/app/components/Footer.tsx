import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const socials = [
  {icon: faFacebookF, url: 'https://facebook.com/'},
  {icon: faInstagram, url: 'https://instagram.com/'},
  {icon: faLinkedin, url: 'https://linkedin.com/'},
]

const footerNav = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Support center', href: '/support' },
  { name: 'Privacy', href: '/privacy' },
]

const Footer = () => {
  return (
    <>
      <footer className="footer-wrap">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <span className="border-t block mt-16 mb-16"></span>
          <div className="social-list mb-4">
            <ul className="flex items-baseline space-x-4">
            {socials.map((item, index) => (
              <li key={index} className="social-item">
                <Link href={item.url}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-10 h-10"
                    style={{ fontSize: 24, color: "#fff" }}
                  />
                </Link>
              </li>
            ))}
            </ul>
          </div>

          <div className="footer-nav menu mb-4">
						<ul className="grid grid-cols-2 md:grid-cols-4 gap-x-4">
							{footerNav.map((item, index) => (
								<li key={index}>
									<Link href={item.href} className="text-gray-300 text-sm hover:text-white">
										{item.name}
									</Link>
								</li>
							))}
							</ul>
          </div>

					<div className="copyright mb-4 text-gray-300 text-sm flex flex-row">
						<FontAwesomeIcon
							icon={faCopyright}
							className="far w-3 mr-1.5 text-gray-300"
              size="xs"
						/> by FFWVietnam
					</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;