import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-exact-masculino/06/D22-2020-006/D22-2020-006_zoom1.jpg?ts=1572880927&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Muito Legal</strong>
        <span>R$159,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-exact-masculino/06/D22-2020-006/D22-2020-006_zoom1.jpg?ts=1572880927&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Muito Legal</strong>
        <span>R$159,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-exact-masculino/06/D22-2020-006/D22-2020-006_zoom1.jpg?ts=1572880927&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Muito Legal</strong>
        <span>R$159,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-exact-masculino/06/D22-2020-006/D22-2020-006_zoom1.jpg?ts=1572880927&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Muito Legal</strong>
        <span>R$159,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-exact-masculino/06/D22-2020-006/D22-2020-006_zoom1.jpg?ts=1572880927&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Muito Legal</strong>
        <span>R$159,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
