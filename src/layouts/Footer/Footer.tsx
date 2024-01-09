import Logo from '@components/Logo/Logo';
import { LogoSize } from '@/enums/LogoSize';
import FooterMenu from '@components/FooterMenu/FooterMenu';
import ContactLink from '@components/ContactLink/ContactLink';
const Footer = () => {
  return (
    <footer className='lg:py-15 bg-gray-white py-10 text-gray-dark [&_a:not(:hover)]:text-gray-dark [&_a]:font-medium'>
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
          <FooterMenu
            links={[
              {
                title: 'Contact',
                path: '',
              },
              {
                title: 'Latest Articles',
                path: '',
              },
              {
                title: 'FAQ',
                path: '',
              },
            ]}
          />
        </div>
        <div>
          <h4 className='footer-title'>Programs</h4>
          <FooterMenu
            links={[
              {
                title: 'Frontend',
                path: '',
              },
              {
                title: 'Backend',
                path: '',
              },
              {
                title: 'Design',
                path: '',
              },
              {
                title: 'QA',
                path: '',
              },
            ]}
          />
        </div>
        <div>
          <h4 className='footer-title'>Contact us</h4>
          <div className='mb-4'>
            Address: 2321 New Frontend Str, Lorem Ipsum10 Hudson Yards, USA
          </div>
          <div>
            <ContactLink
              label='Tel:'
              title='+(123) 2500-567-8988'
              url='tel:+12325005678988'
            />
            <ContactLink
              label='Mail:'
              title='support@someemail.com'
              url='mailto:support@someemail.com'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
