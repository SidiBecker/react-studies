import "./App.css";
import React from "react";
import First from "./components/basics/First";
import ParamComponent from "./components/basics/ParamComponent";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import Child from "./components/basics/Child";
import StudentList from "./components/loop/StudentList";
import ProductList from "./components/loop/ProductList";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default () => (
  <div id="app" className="app">
    <h1>Fundamentos React</h1>

    <div className="cards">
      <Card title="#09 - Usuário Info">
        <UsuarioInfo user={{ name: "SidiBecker" }}></UsuarioInfo>
        <UsuarioInfo user={{ name: "Teste" }}></UsuarioInfo>
        <UsuarioInfo user={{ email: "SidiBecker@gmail" }}></UsuarioInfo>
      </Card>
      <Card title="#08 - Renderização Condicional">
        <ParOuImpar value={[20, 23, 76, 13, 9, 7, 21]}></ParOuImpar>
      </Card>
      <Card title="#07 - Product List">
        <ProductList></ProductList>
      </Card>

      <Card title="#06 - Loop">
        <StudentList></StudentList>
      </Card>

      <Card title="#05 - Component with children" color="darkred">
        <Family sobrenome="Fulano">
          <Child nome="Sidnei"></Child>
          <Child nome="Fulano" sobrenome="Silva"></Child>
          <Child nome="Silva"></Child>
        </Family>
      </Card>

      <Card title="#04 - Random" color="darkred">
        <Random min="2" max="5" />
      </Card>

      <Card title="#03 - Fragment">
        <Fragment />
      </Card>

      <Card title="#02 - Parameter component" color="gray">
        <ParamComponent
          title="Nice Component"
          subtitle="Awesome!"
          username="SidiBecker"
        />
      </Card>

      <Card title="#01 - First component">
        <First />
      </Card>
    </div>
  </div>
);
