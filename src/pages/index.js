import { useState } from 'react'
import { CarbonFootprintGraph, EmissionGraph } from '@/components/graphs'

export default function Home() {
  const [emissionPercentages, setEmissionPercentages] = useState({
    spinning: 0,
    transportation: 0,
    carding: 0,
    heating_cooling: 0,
    overallTotal: 0
  })

  return (
    <div className='dashboard-Emc' >
      <div className='sidebar-SMt'>
        <img className='screenshot-2023-03-01-at-1056-1-9Z8' src='./assets/screenshot-2023-03-01-at-1056-1.png' />
        <div className='menu-y2N'>
          <div className='section-01-EU6'>
            <p className='d-a-s-h-b-o-a-r-d-vbp'>D A S H B O A R D</p>
            <div className='links-XrW'>
              <div className='elements-menu-link-fSv'>
                <div className='header-8dL'>
                  <div className='frame-1941-EAa'>
                    <div className='frame-1983-YBG'>
                      <img className='icon-stats-SnS' src='./assets/icon-stats.png' />
                      <p className='dashboard-YKg'>Dashboard</p>
                    </div>
                  </div>
                  <img className='icon-chevron-up-P5Q' src='./assets/icon-chevron-up.png' />
                </div>
                <div className='links-6Ei'>
                  <p className='record-CoY'>Record</p>
                  <p className='reports-uhx'>Reports</p>
                  <p className='analyse-RgJ'>Analyse</p>
                  <p className='learn-XzE'>Learn</p>
                </div>
              </div>
            </div>
          </div>
          <div className='section-02-dGa'>
            <p className='p-a-g-e-s-wo4'>P A G E S</p>
            <div className='links-TWW'>
              <div className='elements-menu-link-1nv'>
                <div className='frame-1941-XWN'>
                  <div className='frame-1983-sq8'>
                    <img className='icon-support-S7Y' src='./assets/icon-support.png' />
                    <p className='dashboard-YgN'>Help Center</p>
                  </div>
                </div>
                <img className='icon-chevron-down-Hdx' src='./assets/icon-chevron-down-Cva.png' />
              </div>
              <div className='elements-menu-link-cAS'>
                <div className='frame-1941-jVx'>
                  <div className='frame-1983-VEE'>
                    <img className='icon-folder-2zr' src='./assets/icon-folder.png' />
                    <p className='dashboard-A5U'>File Manager</p>
                  </div>
                </div>
                <img className='icon-chevron-down-VtS' src='./assets/icon-chevron-down.png' />
              </div>
            </div>
          </div>
        </div>
        <div className='footer-DZY'>
          <img className='icon-settings-vir' src='./assets/icon-settings.png' />
          <img className='icon-logout-TTt' src='./assets/icon-logout.png' />
          <img className='icon-globe-b4J' src='./assets/icon-globe.png' />
        </div>
      </div>
      <div className='auto-group-ykfq-6Wr'>
        <div className='body-3gz'>
          <div className='elements-top-bar-Cpn'>
            <div className='form-input-WqU'>
              <div className='input-FHG'>
                <div className='iconinput-zke'>
                  <img className='icon-search-LZc' src='./assets/icon-search.png' />
                  <p className='your-email-51Q'>Search...</p>
                </div>
              </div>
            </div>
            <div className='items-aD4'>
              <div className='icons-wJW'>
                <img className='icon-indicator-UZL' src='./assets/icon-indicator.png' />
                <img className='icon-calendar-CES' src='./assets/icon-calendar.png' />
                <img className='icon-layout-grid-L5k' src='./assets/icon-layout-grid.png' />
              </div>
              <div className='avatar-sLa'>
                <div className='image-placeholder-1hg'>
                  <div className='indicator-vJr'>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='metrics-k2z'>
            <div className='metric-cards-dca'>
              <div className='auto-group-jgpw-khC'>
                <div className='header-hMY'>
                  <p className='carbon-footprint-Fdx'>Carbon FootPrint</p>
                  <p className='t-co2e-bC2'>{emissionPercentages.overallTotal}t CO2e</p>
                </div>
                <div className='badge-inS'>
                  <div className='content-eg6'>
                    <div className='auto-group-pmlb-ccv'>-45%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='typemetric-stylestyle-6-eZc'>
              <div className='content-ZwU'>
                <div className='header-iJa'>
                  <p className='emissions-by-spinning-4tE'>Emissions by Spinning</p>
                  <p className='t-DFL'>{emissionPercentages.spinning * emissionPercentages.overallTotal}t</p>
                  <p className='co2e-M6e'>CO2e</p>
                </div>
                <div className='badge-hAW'>
                  <div className='content-2Tg'>
                    <div className='auto-group-r6nb-zvJ'>-60%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='typemetric-stylestyle-7-eEA'>
              <div className='content-9wc'>
                <div className='header-WnA'>
                  <p className='emission-by-transportation-sMp'>Emission By Transportation</p>
                  <p className='t-1U2'>{emissionPercentages.transportation * emissionPercentages.overallTotal}t</p>
                  <p className='co2e-kAi'>CO2e</p>
                </div>
                <div className='info-gq4'>
                  <div className='badge-dkJ'>
                    <div className='content-AVL'>
                      <div className='auto-group-vkq3-LPp'>0.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='typemetric-stylestyle-8-ySn'>
              <div className='content-tpe'>
                <div className='header-3xS'>
                  <p className='emission-by-carding-D6E'>Emission by Carding</p>
                  <p className='item-241231-ZA6'>{emissionPercentages.carding * emissionPercentages.overallTotal}</p>
                  <p className='co2e-hGJ'>CO2e</p>
                </div>
                <div className='info-SDt'>
                  <div className='badge-BxA'>
                    <div className='content-iBQ'>
                      <div className='auto-group-sjif-t5t'>+0.6%</div>
                    </div>
                  </div>
                  <p className='from-46-ZSv'>From 4.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='auto-group-a2j9-pdk'>
          <div className='consumption-per-day-xV4'>
            <div className='auto-group-uhqh-rqL'>
              <p className='title-xtN'>Carbon Footprint</p>
              <div className='group-155-Gu4'>
                <div className='group-151-bgS'>
                  <div className='ellipse-86-MvW'>
                  </div>
                  <p className='spinning-UVL'>Spinning</p>
                </div>
                <div className='group-152-R9g'>
                  <div className='ellipse-85-Nqc'>
                  </div>
                  <p className='transportation-tZ4'>Transportation</p>
                </div>
                <div className='group-153-Pki'>
                  <div className='ellipse-84-9Uz'>
                  </div>
                  <p className='carding-Siz'>Carding</p>
                </div>
                <div className='group-154-Aut'>
                  <div className='ellipse-83-8bp'>
                  </div>
                  <p className='heating-cooling-Euk'>Heating &amp; Cooling</p>
                </div>
              </div>
              <img className='button-mug' src='./assets/button.png' />
            </div>
            <div className='group-150-7Tk'>
              <CarbonFootprintGraph />
            </div>
          </div>
          <div className='group-157-b8a'>
            <p className='title-X2E'>Top emissions by type</p>
            <EmissionGraph setEmissionPercentages={setEmissionPercentages} />
            <div className='group-155-eFG'>
              <div className='group-151-mqg'>
                <div className='ellipse-86-8gE'>
                </div>
                <p className='spinning-FF4'>Spinning</p>
                <p className='item-22-P6N'>{emissionPercentages.spinning}%</p>
              </div>
              <div className='auto-group-hsns-7YA'>
                <div className='group-152-fJn'>
                  <div className='ellipse-85-cUv'>
                  </div>
                  <p className='transportation-jpS'>Transportation</p>
                  <p className='item-16-tBY'>{emissionPercentages.transportation}%</p>
                </div>
                <div className='group-153-DzW'>
                  <div className='ellipse-84-aq4'>
                  </div>
                  <p className='carding-Jm4'>Carding</p>
                  <p className='item-27-3yY'>{emissionPercentages.carding}%</p>
                </div>
              </div>
              <div className='group-154-ayU'>
                <div className='ellipse-83-9Wn'>
                </div>
                <p className='heating-cooling-UJA'>Heating &amp; Cooling</p>
                <p className='item-35-CEA'>{emissionPercentages.heating_cooling}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}