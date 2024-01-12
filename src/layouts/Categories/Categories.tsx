import { useFetch } from '@/hooks/useFetch';

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
    <div>
      {data &&
        data.map((cat, index) => <div key={index}>{cat.attributes.name}</div>)}
    </div>
  );
};

export default Categories;
