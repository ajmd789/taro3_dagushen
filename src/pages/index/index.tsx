import React, { Component, useState, useEffect ,useRef} from 'react'
import { View, Text,Canvas, } from '@tarojs/components'
import './index.scss'
import Taro,{useDidShow,useReady}from '@tarojs/taro'
import classNames from 'classnames';
export default function index() {
  useEffect(() => {
  
  }, [])
 
  
    const handleHelpClick = () => {
      Taro.navigateTo({
        url: '/pages/help/index',  
      })
    }

  return (
    <View  className={classNames('index','')}>
      <View>
      <View>
      <View className={classNames('taiji')}>
        <View className={classNames('a')}>
            <View className={classNames('inner')}>
            </View>
        </View>
        <View className={classNames('b')}>
            <View className={classNames('inner')}>
            </View>
        </View>
    </View>
      </View>
      </View>
      <View  className={classNames('index-text')}>
      谓之卦者、言悬卦物象以示于人也。八卦既成、则八卦皆可为太极。复生两仪而十六、四象而三十二、八卦而六十四、而万物之变尽于斯矣。
      </View>
    <View
              onClick={handleHelpClick}
              className={classNames('bagua')}
            >
              点这里
      </View>
        </View>
  )
}

