/* eslint-disable react/no-array-index-key */

import Link from 'next/link'

const data = ['electronics', 'garden', 'car', 'home', 'weekend', 'hobby', 'tools', 'hunting']

const CategoriesPage = () => {
  return (
    <div className="categories">
      <ul className="categories__list">
        {data.map((category, index) => (
          <li className="categories__item" key={index}>
            <Link href={`/category/${category}`}>
              <div className="category__image" />
              <p>{category}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesPage
