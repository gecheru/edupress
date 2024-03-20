import { useFetch } from '@/hooks/useFetch';
import CategoryCard from '@components/CategoryCard/CategoryCard';
import { IconName } from '@components/Icon/assets';
import { RouterPaths } from '@constants/routerPaths';
import SectionHeading from '@layouts/SectionHeading/SectionHeading';

const Categories = () => {
  const { data, isLoading, error } = useFetch<
    {
      attributes: { name: string; iconName: IconName; slug: string };
      id: number;
    }[]
  >('course-categories');

  if (isLoading) {
    return <div>isLoading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <section className='pt-[var(--section-h-space)]'>
      <div className='container'>
        <SectionHeading
          title='Top Categories'
          subtitle='Explore our Popular Categories'
          btnText='All categories'
          btnPath={RouterPaths.Courses}
        />

        <div className='flex flex-wrap justify-center gap-[var(--gap)]'>
          {data &&
            data.map((cat, index) => (
              <CategoryCard key={index} categoryLink={cat.attributes} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
