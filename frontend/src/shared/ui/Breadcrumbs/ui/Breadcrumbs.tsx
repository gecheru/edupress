import { Link, UIMatch, useMatches } from 'react-router-dom';

interface Crumb {
  crumb: (data?: unknown) => { title: string };
}

interface Matches extends UIMatch {
  handle: Crumb;
}

export const Breadcrumbs = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const matches: Matches[] = useMatches();
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => ({ path: match.pathname, ...match.handle.crumb() }));

  return (
    <aside className='bg-gray-white py-3 lg:py-4'>
      <div className='container'>
        <ul className='flex flex-wrap items-center text-gray-dark'>
          {crumbs.map((crumb, index) => (
            <li
              key={index}
              className='last:text-gray [&:not(:last-child)]:after:mx-2 [&:not(:last-child)]:after:content-[">"]'
            >
              {index === crumbs.length - 1 ? (
                crumb.title
              ) : (
                <Link to={crumb.path}>{crumb.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
