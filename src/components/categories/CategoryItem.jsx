import React from 'react'
import { ButtonCategory,  CategoryImg,  CategoryInfo, CategoryTitle, CategoryDiv } from '../styled_components/styles'

const CategoryItem = ({item}) => {
  return (
    <CategoryDiv>
        <CategoryImg src={item.img} />
         <CategoryInfo>
            <CategoryTitle>{item.title}</CategoryTitle>
            <ButtonCategory>SHOP NOW</ButtonCategory>
         </CategoryInfo>
    
    </CategoryDiv>
  )
}

export default CategoryItem