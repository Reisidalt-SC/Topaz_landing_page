import { useState } from "react";
import "./doubts.scss";


function Doubts() {
    return(
        <section className="doubts_area">
            <div className="section_title">
                    <span><i className="bi bi-bag"></i> Faça seu Pedido</span>
                    <div className="title_text">
                        <h1>Peça Direto com a Gente</h1>
                        <p>Monte seu pedido personalizado e receba nossos produtos fresquinhos em casa</p>
                    </div>
                </div>
                <div className="accordions_grid">
                    <div className="accordion">
                        <button id="accordion_button">De onde vêm os ingredientes?<span><i className="bi bi-caret-down"></i></span></button>
                        <div className="accordion_text">
                            <p>Todos os nossos ingredientes são cuidadosamente selecionados de produtores locais e parceiros certificados. 
                                O mel é coletado de apiários próprios e de pequenos apicultores parceiros que seguem práticas sustentáveis. 
                                As frutas para geleias são orgânicas e de origem rastreada.</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <button id="accordion_button">De onde vêm os ingredientes?<span><i className="bi bi-caret-down"></i></span></button>
                        <div className="accordion_text">
                            <p>Todos os nossos ingredientes são cuidadosamente selecionados de produtores locais e parceiros certificados. 
                                O mel é coletado de apiários próprios e de pequenos apicultores parceiros que seguem práticas sustentáveis. 
                                As frutas para geleias são orgânicas e de origem rastreada.</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <button id="accordion_button">De onde vêm os ingredientes?<span><i className="bi bi-caret-down"></i></span></button>
                        <div className="accordion_text">
                            <p>Todos os nossos ingredientes são cuidadosamente selecionados de produtores locais e parceiros certificados. 
                                O mel é coletado de apiários próprios e de pequenos apicultores parceiros que seguem práticas sustentáveis. 
                                As frutas para geleias são orgânicas e de origem rastreada.</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <button id="accordion_button">De onde vêm os ingredientes?<span><i className="bi bi-caret-down"></i></span></button>
                        <div className="accordion_text">
                            <p>Todos os nossos ingredientes são cuidadosamente selecionados de produtores locais e parceiros certificados. 
                                O mel é coletado de apiários próprios e de pequenos apicultores parceiros que seguem práticas sustentáveis. 
                                As frutas para geleias são orgânicas e de origem rastreada.</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <button id="accordion_button">De onde vêm os ingredientes?<span><i className="bi bi-caret-down"></i></span></button>
                        <div className="accordion_text">
                            <p>Todos os nossos ingredientes são cuidadosamente selecionados de produtores locais e parceiros certificados. 
                                O mel é coletado de apiários próprios e de pequenos apicultores parceiros que seguem práticas sustentáveis. 
                                As frutas para geleias são orgânicas e de origem rastreada.</p>
                        </div>
                    </div>
                    <div className="accordion">
                        <button id="accordion_button">De onde vêm os ingredientes?<span><i className="bi bi-caret-down"></i></span></button>
                        <div className="accordion_text">
                            <p>Todos os nossos ingredientes são cuidadosamente selecionados de produtores locais e parceiros certificados. 
                                O mel é coletado de apiários próprios e de pequenos apicultores parceiros que seguem práticas sustentáveis. 
                                As frutas para geleias são orgânicas e de origem rastreada.</p>
                        </div>
                    </div>
                </div>
                <div className="contact_link">
                    <span>Não encontrou a resposta que procura?</span>
                    <button>Entre em Contato</button>
                </div>
        </section>
    )
}

export default Doubts;