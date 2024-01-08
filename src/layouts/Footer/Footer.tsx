import Logo from '@components/Logo/Logo';
import { LogoSize } from '@/enums/LogoSize';

const Footer = () => {
  return (
    <footer className='bg-gray-white py-14 text-gray-dark lg:py-20'>
      <div className='container grid gap-8 lg:grid-cols-footer'>
        <div>
          <Logo size={LogoSize.Sm} />
          <div className='mt-4 max-w-[340px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div>
          <h4 className='footer-title'>Get help</h4>
        </div>
        <div>
          <h4 className='footer-title'>Programs</h4>
        </div>
        <div>
          <h4 className='footer-title'>Contact us</h4>
          <div className='mb-4'>
            Address: 2321 New Frontend Str, Lorem Ipsum10 Hudson Yards, USA
          </div>
          <div>
            <a href='tel:+12325005678988' className='block'>
              Tel: + (123) 2500-567-8988
            </a>
            <a href='mailto:support@someemail.com' className='block'>
              Mail: support@someemail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
