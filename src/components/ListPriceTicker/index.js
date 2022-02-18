import React from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { getStateListPriceTicker } from './selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPriceTicker } from '../../store/actionCreaters';
import ListItem from '../ListItem';

function ListPriceTicker() {
  const dispatch = useDispatch();
  const socket = io.connect('http://localhost:4000');

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', (response) => {
      const res = Array.isArray(response) ? response : [response];
      return dispatch(getPriceTicker(res));
    });
  }, []);

  const list = useSelector(getStateListPriceTicker);
  return list.map((item, index) => {
    return <ListItem key={index} item={item} />;
  });
}
export default ListPriceTicker;
