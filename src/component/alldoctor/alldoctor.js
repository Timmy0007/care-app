import React from 'react'
import "./alldoctor.css"
import gyne1 from '../../assets/gyne1.png'
import gyne2 from '../../assets/gyne2.png'
import cardio1 from '../../assets/cardio1.png'
import cardio2 from '../../assets/cardio2.png'
import neuro1 from '../../assets/neuro1.png'
import neuro2 from '../../assets/neuro2.png'
import syringe from '../../assets/syringe.png'


const alldoctor = () => {
  return (
    <div className='alldoctor'>
        
        <div className='medical'>
            <div className='med'>
        <p className='medical1'>Meet Our Medical Specialities</p>
        <p className='medical2'>From All Over The Country , We Select The Best Medical Practitioners. What More , The 1-On-1 Chat Feature Makes You Tell The Doctor How You Feel </p>
        </div>
        <img className='syringe' src={syringe}/>
        </div>

        <div className='alldoctors'>
        <button className='add-btn' id='alldocc1'><p className='alld'>All Doctors</p></button>
        <button className='add-btn' id='alldocc2'><p className='alld'> Psychologist</p></button>
        <button className='add-btn' id='alldocc3'><p className='alld'>Surgeon</p></button>
        <button className='add-btn' id='alldocc4'><p className='alld'>Neurologist</p></button>
        <button className='add-btn' id='alldocc5'><p className='alld'>Pediatrician</p></button>
        <button className='add-btn' id='alldocc6'><p className='alld'>Dermatlogist</p></button>
        <button className='add-btn' id='alldocc7'><p className='alld'>Cardiologist</p></button>
        <button className='add-btn' id='alldocc8'><p className='alld'>Gynecologist</p></button>
        </div>

        <div className='doctors'>
            <div className='d1'>
            <div className='doctors1'>
                <img className='doctorimg' id='gyneimg' src={gyne1}/>
                <div className='doctorname' id='gynename'>Oluwademilade Rotimi</div>
                <div className='doctorwork' id='gyne1'>Gynecologist</div>
            </div>

            <div className='doctors1' id='cardiodoc'>
            <img className='doctorimg' src={cardio1}/>
                <div className='doctorname' id='cardioname'>Kayode Jonathan</div>
                <div className='doctorwork' id='cardiowork'>Cardiologist</div>
            </div>

            <div className='doctors1' id='neurodoc'>
            <img className='doctorimg' src={neuro1}/>
                <div className='doctorname' id='neuroname'>Ifeoluwa Kehinde</div>
                <div className='doctorwork' id='neurowork'>Neurologist</div>
            </div>
            </div>


            <div className='d2'>
            <div className='doctors1' id='gynedoc'>
            <img className='doctorimg' src={gyne2}/>
                <div className='doctorname' id='gynename'>Tunde Emmanuel</div>
                <div className='doctorwork' id='gynework'>Gynecologist</div>
            </div>

            <div className='doctors1' id='cardiodoc2'>
            <img className='doctorimg' src={cardio2}/>
                <div className='doctorname' id='cardioname2'>Oluwatomisin Josephine</div>
                <div className='doctorwork' id='cardiowork2'>Cardiologist</div>
            </div>

            <div className='doctors1' id='neurodoc2'>
            <img className='doctorimg' src={neuro2}/>
                <div className='doctorname' id='neuroname2'>Temitope Funmilayo</div>
                <div className='doctorwork' id='neurowork2'>Neurologist</div>
            </div>
            </div>

        </div>


    </div>
  )
}

export default alldoctor