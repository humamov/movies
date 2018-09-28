import React from 'react';
import   './filter.css'
const Filter = (props)=>{
    return(
        <div className={`filter ${props.filterToggle ? 'expanded' : '' }`} >
            <div className="filter--btn" onClick={props.filterToggleFn}>
                Filter
            </div>
            <div className="filter-content">
                <div className="filter--years">
                    <h3 className="head">Years</h3>
                    <div class="tags">
                        <span class="tag">2010</span>
                        <span class="tag">2011</span>
                        <span class="tag">2012</span>
                        <span class="tag">2013</span>
                        <span class="tag">2014</span>
                        <span class="tag">2015</span>
                        <span class="tag">2016</span>
                        
                    </div>
                </div>

                <div className="filter--keywords">
                    <h3 className="head">Keywords</h3>
                    <div class="tags">
                        <span class="tag">Love</span>
                        <span class="tag">Underdog</span>
                        <span class="tag">Training</span>
                        <span class="tag">Racism</span>
                        <span class="tag">Martial Arts</span>
                        <span class="tag">Stadium</span>
                        <span class="tag">Motorcycle</span>
                        <span class="tag">Victory</span>
                        <span class="tag">Karate</span>
                        <span class="tag">Boxing Match</span>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Filter;