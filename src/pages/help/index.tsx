import { Component, PropsWithChildren } from 'react'
import { View, Text,Image } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import {useState} from 'react'
import classNames from 'classnames';
export default function index() {
  const [guaxiang, setguaxiang] = useState([
    '乾卦为天(上上卦)',
    '坤卦为地(上上卦)',
    '兑卦为泽(上上卦)',
    '离卦为火(中上卦)',
    '震卦为雷(中上卦)',
    '巽卦为风(中上卦)',
    '艮卦为山(中下卦)',
    '坎卦为水(下下卦)'])
  const goToDetail = (item:any,index:number) => {
    console.log(item,'item',index)
  }
  
  return (
    <View className={classNames('help')}>
      {
        guaxiang.map((item,index)=><View
      onClick={e=>goToDetail(item,index)}
        className={classNames('guaxiangMap')}>
          {item}
          </View>)
      }
        </View>
  )
}
