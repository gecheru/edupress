import { useFetch } from '@/hooks/useFetch';

const Categories = () => {
  const { data, isLoading, error } = useFetch('course-categories');

  if (isLoading) {
    return <div>isLoading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.map((cat, index) => (
        <div key={index}>{cat.attributes.name}</div>
      ))}
    </div>
  );
};

export default Categories;
