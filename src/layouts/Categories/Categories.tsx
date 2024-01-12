import { useFetch } from '@/hooks/useFetch';
import CategoryCard from '@components/CategoryCard/CategoryCard';
import { RouterPaths } from '@constants/routerPaths';
import SectionHeading from '@layouts/SectionHeading/SectionHeading';

const Categories = () => {
  const { data, isLoading, error } =
    useFetch<{ attributes: { name: string }; id: number }[]>(
      'course-categories',
    );

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

        <div className='grid gap-[var(--gap)] md:grid-cols-2 lg:grid-cols-5'>
          {data &&
            data.map((cat, index) => (
              <CategoryCard key={index} title={cat.attributes.name} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
