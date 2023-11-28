import React from 'react';
import './footer.css';

export const Footer = () => {
    return (
        <>
            <br></br>
            <footer >
                <div className="footer dark:text-white">
                    <div className="texto dark:text-white">
                        Web Page created by: Robertino Silvera & Nahuel Palma
                    </div>

                    <div className="row dark:text-white">
                        <ul>
                            <li ><a href="https://github.com/PalNahu/Proyecto-App-Biblioteca">Github (proyect)</a></li>
                            <li><a href="mailto:nahuelmartin.palma@estudiantes.unahur.edu.ar">Contact</a></li>
                            <li><a href="mailto:robertinolucasmanuel.silvera@estudiantes.unahur.edu.ar ">Contact 2</a></li>

                        </ul>
                    </div>

                    <div className="texto dark:text-white">
                        Copyright ©  2023
                    </div>
                </div>
            </footer>
        </>
    )
}
