import React from 'react'
import Button from './components/Button/Button'
import HeaderText from './components/HeaderText/HeaderText'

export default function About() {
    return (
        <div>
            <HeaderText>WHY <span>CHOOSE US</span></HeaderText>
            <Button className="contain-btn">Get Started</Button>
        </div>
    )
}
