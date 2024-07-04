import { Category } from 'entities/Category';
import { RouterPaths } from 'shared/constants';
import { useFetch } from 'shared/hooks/useFetch';
import type { IconName } from 'shared/ui/Icon';
import { SectionHeading } from 'shared/ui/SectionHeading';

export const Categories = () => {
  const { data, isLoading, error } = useFetch<
    {
      attributes: { name: string; iconName: IconName; slug: string };
      id: number;
    }[]
  >('course-categories', {
    filters: {
      featured: {
        $eq: true,
      },
    },
  });

  console.log('error', error);

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
              <Category key={index} categoryLink={cat.attributes} />
            ))}
        </div>
      </div>
    </section>
  );
};
