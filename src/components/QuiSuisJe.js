import React from "react"
import Agathe from "../images/agathe.jpg"

export default function QuiSuisJe() {
  return (
    <div class="bg-gray-50">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12 ">
          <div class="">
            <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li class="sm:py-8">
                <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      class="object-cover shadow-lg rounded-lg"
                      src={Agathe}
                      alt=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <div class="space-y-4">
                      <div class="text-lg leading-6 font-medium space-y-1">
                        <h3>Agathe Lescout</h3>
                        <p class="text-gold-600">
                          Ostéopathe / Professeur à l'EAO - École Aquitaine
                        </p>
                      </div>
                      <div class="text-lg">
                        <p class="text-gray-500">
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
                          ostéopathes animaliers en France et visible sur le
                          site internet du CNOV.
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
