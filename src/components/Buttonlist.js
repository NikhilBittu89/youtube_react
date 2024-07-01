import React from 'react'
import Button from './Button'

const list=["All","Live","Gameing","Songs","Live","Scoccer","Ceicket","Cooking","History","Mixes","ComputerScience","Music","News",]
const Buttonlist = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gameing"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Scoccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="News"/>
      <Button name="Valentine"/>
      <Button name="Cooking"/>
      <Button name="News"/>
      <Button name="Valentine"/>
    </div>
  )
}

export default Buttonlist
