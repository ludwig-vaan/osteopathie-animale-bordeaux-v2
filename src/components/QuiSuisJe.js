import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function QuiSuisJe() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 ">
          <div className="">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <StaticImage
                      className="shadow-lg rounded-lg overflow-hidden"
                      src="../images/agathe.jpg"
                      alt="Agathe Lescout"
                      imgStyle={{ borderRadius: 8 }}
                      style={{ borderRadius: 8 }}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>Agathe Lescout</h3>
                        <p className="text-gold-600">
                          Ostéopathe / Professeur à l'EAO - École d'Aquitaine
                          d'Ostéopathie
                        </p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">
                          Ostéopathe animalier en région Aquitaine, je réalise
                          des consultations à domicile sur les chiens, les
                          chats, les NAC, les chevaux et les vaches. Après un
                          master en physiologie et comportement animal je décide
                          de me consacrer entièrement au bien être animal. Je me
                          forme pendant 4 ans à l'ostéopathie animale sur tous
                          les animaux au CNESOA. Ces années d'études me
                          permettent de pratiquer et de me perfectionner sur de
                          nombreuses techniques tel que le structurel, les
                          étirements musculaires, le viscéral, le tissulaire,
                          les techniques crânio-sacrées, les techniques réflexes
                          et les points d'acupressures, afin d'appliquer au
                          mieux le traitement adapté à votre animal et à sa
                          pathologie. Toujours désireuse de me perfectionner et
                          de vous offrir le meilleur en terme de bien être
                          animal, j'ai pu valider mon travail auprès de l'Ordre
                          National des Vétérinaires (CNOV) et ainsi être
                          inscrite au Registre National d'Aptitude en
                          ostéopathie animale, seule liste certifiant les
                          ostéopathes animaliers en France et visible sur{" "}
                          <a
                            href="https://www.veterinaire.fr/les-autres-metiers/liste-des-personnes-non-veterinaires-pouvant-realiser-des-actes-dosteopathie-animale/registre-national-daptitude-rna.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            le site internet du CNOV.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
