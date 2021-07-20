import React from 'react'
import "./menuSidebar.css"

const MenuSidebar = () => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-link active-menu-link">
                <i className="fa fa-home"></i>
                <a href="#">Inicio</a>
            </div>
            <div className="sidebar-link">
                <i className="fa fa-cutlery"></i>
                <a href="#">Pedidos</a>
            </div>
            <div className="sidebar-link">
                <i className="fa fa-user-check"></i>
                <a href="#">Clientes</a>
            </div>
            <div className="sidebar-link">
                <i className="fa fa-box-open"></i>
                <a href="#">Produtos</a>
            </div>
            <div className="sidebar-link">
                <i className="fa fa-user"></i>
                <a href="#">Usuarios</a>
            </div>
            <div className="sidebar-link">
                <i className="fa fa-tachometer"></i>
                <a href="#">Relatorios</a>
            </div>
            <h2>Relatorios</h2>
            <div className="sidebar-link">
                <i className="fa fa-chart-area"></i>
                <a href="#">Mês</a>
            </div>
            <div className="sidebar-logout">
                <i className="fa fa-power-off"></i>
                <a href="#">Sair</a>
            </div>

        </div>
    )
}

export default MenuSidebar
