import React from "react"
import Section from "../Section"
import { ReactSVG } from "react-svg"
import checkmark from "../../images/servicesSection/checkmark.svg"
import servicesData from "../../data/servicesSection.json"

export default function Services() {
  return (
    <Section className={"services"} id={servicesData.title}>
      <h2>{servicesData.title}</h2>
      {Object.keys(servicesData.categories).map(category => (
        <div className="container">
          <h3>{category}</h3>
          <ul key={category}>
            {servicesData.categories[category].map(service => (
              <li key={service}>
                <ReactSVG src={checkmark} />
                {service}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}
