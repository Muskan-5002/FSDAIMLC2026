import React from 'react'
import ICard from './ICard'
import cat from '../images/cat.png'
function ICardGallery() {
  
  return (
    <div>
        <ICard pic={cat} roll="12345" name="Avani Goel" branch="CSE-AIML"/>
        <ICard roll="12346" name="Saksham Ojha" branch="CSE-AIML"/>
        <ICard roll="12347" name="Anshika Gupta" branch="CSE-AIML"/>
        <ICard roll="12348" name="Aastha" branch="CSE-AIML"/>
        <ICard roll="12349" name="Rishabh Sharma" branch="CSE-AIML"/>
    </div>
 
  )
}

export default ICardGallery