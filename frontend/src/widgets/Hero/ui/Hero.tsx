import girl from '../assets/girl.png';
import leftVektor from '../assets/leftVector.svg';
import topVector from '../assets/topVector.svg';
import drops from '../assets/drops.svg';
import school from '../assets/school.svg';
import { Button } from 'shared/ui/Button';
import { RouterPaths } from 'shared/constants';

export const Hero = () => {
  // background: linear-gradient(98deg, #FFF5BE 0%, #D0F7EA 97.73%);
  return (
    <section className='relative h-[500px] overflow-hidden bg-gradient-to-r from-[#FFF5BE] to-[#D0F7EA] py-4 lg:h-[700px]'>
      <img
        src={leftVektor}
        className='pointer-events-none absolute bottom-0 left-0'
      />
      <div className='pointer-events-none absolute right-0 top-0 flex items-start'>
        <img src={drops} />
        <img src={topVector} />
      </div>
      <div className='container relative grid h-full place-content-center items-center lg:grid-cols-2 xl:grid-cols-3'>
        <div className='z-10 text-center lg:text-start'>
          <h1 className='mb-6'>
            Build Skills with <br className='hidden lg:inline' /> Online Course
          </h1>
          <div className='mb-5 text-xl text-gray-dark'>
            Nulla accumsan neque nec nisi molestie, sed placerat magna maximus.
            Aliquam sed quam eu neque elementum faucibus in nec ipsum.
          </div>
          <Button to={RouterPaths.Courses}>Find your course</Button>
        </div>
        <img
          className='pointer-events-none absolute right-0 top-[50%] translate-y-[-50%]'
          src={school}
        />
        <img
          className='pointer-events-none absolute bottom-[-16px] right-[-100px] top-[-16px] hidden lg:inline-block'
          src={girl}
        />
      </div>
    </section>
  );
};
