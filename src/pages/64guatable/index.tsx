import { Component, PropsWithChildren } from 'react'
import { View, Text,Image } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import {useState} from 'react'
import classNames from 'classnames';
export default function index() {
  const [guaxiang, setguaxiang] = useState([
    <a href="/gua/1.htm">第一卦 乾为天</a>
                                ,<a href="/gua/2.htm">第二卦 坤为地</a>
                                ,<a href="/gua/3.htm">第三卦 水雷屯</a>
                                ,<a href="/gua/4.htm">第四卦 山水蒙</a>
                                ,<a href="/gua/5.htm">第五卦 水天需</a>
                                ,<a href="/gua/6.htm">第六卦 天水讼</a>
                                ,<a href="/gua/7.htm">第七卦 地水师</a>
                                ,<a href="/gua/8.htm">第八卦 水地比</a>
                                ,<a href="/gua/9.htm">第九卦 风天小畜</a>
                                ,<a href="/gua/10.htm">第十卦 天泽履</a>
                                ,<a href="/gua/11.htm">第十一卦 地天泰</a>
                                ,<a href="/gua/12.htm">第十二卦 天地否</a>
                                ,<a href="/gua/13.htm">第十三卦 天火同人</a>
                                ,<a href="/gua/14.htm">第十四卦 火天大有</a>
                                ,<a href="/gua/15.htm">第十五卦 地山谦</a>
                                ,<a href="/gua/16.htm">第十六卦 雷地豫</a>
                                ,<a href="/gua/17.htm">第十七卦 泽雷随</a>
                                ,<a href="/gua/18.htm">第十八卦 山风蛊</a>
                                ,<a href="/gua/19.htm">第十九卦 地泽临</a>
                                ,<a href="/gua/20.htm">第二十卦 风地观</a>
                                ,<a href="/gua/21.htm">第二十一卦 火雷噬嗑</a>
                                ,<a href="/gua/22.htm">第二十二卦 山火贲</a>
                                ,<a href="/gua/23.htm">第二十三卦 山地剥</a>
                                ,<a href="/gua/24.htm">第二十四卦 地雷复</a>
                                ,<a href="/gua/25.htm">第二十五卦 天雷无妄</a>
                                ,<a href="/gua/26.htm">第二十六卦 山天大畜</a>
                                ,<a href="/gua/27.htm">第二十七卦 山雷颐</a>
                                ,<a href="/gua/28.htm">第二十八卦 泽风大过</a>
                                ,<a href="/gua/29.htm">第二十九卦 坎为水</a>
                                ,<a href="/gua/30.htm">第三十卦 离为火</a>
                                ,<a href="/gua/31.htm">第三十一卦 泽山咸</a>
                                ,<a href="/gua/32.htm">第三十二卦 雷风恒</a>
                                ,<a href="/gua/33.htm">第三十三卦 天山遁</a>
                                ,<a href="/gua/34.htm">第三十四卦 雷天大壮</a>
                                ,<a href="/gua/35.htm">第三十五卦 火地晋</a>
                                ,<a href="/gua/36.htm">第三十六卦 地火明夷</a>
                                ,<a href="/gua/37.htm">第三十七卦 风火家人</a>
                                ,<a href="/gua/38.htm">第三十八卦 火泽睽</a>
                                ,<a href="/gua/39.htm">第三十九卦 水山蹇</a>
                                ,<a href="/gua/40.htm">第四十卦 雷水解</a>
                                ,<a href="/gua/41.htm">第四十一卦 山泽损</a>
                                ,<a href="/gua/42.htm">第四十二卦 风雷益</a>
                                ,<a href="/gua/43.htm">第四十三卦 泽天夬</a>
                                ,<a href="/gua/44.htm">第四十四卦 天风姤</a>
                                ,<a href="/gua/45.htm">第四十五卦 泽地萃</a>
                                ,<a href="/gua/46.htm">第四十六卦 地风升</a>
                                ,<a href="/gua/47.htm">第四十七卦 泽水困</a>
                                ,<a href="/gua/48.htm">第四十八卦 水风井</a>
                                ,<a href="/gua/49.htm">第四十九卦 泽火革</a>
                                ,<a href="/gua/50.htm">第五十卦 火风鼎</a>
                                ,<a href="/gua/51.htm">第五十一卦 震为雷</a>
                                ,<a href="/gua/52.htm">第五十二卦 艮为山</a>
                                ,<a href="/gua/53.htm">第五十三卦 风山渐</a>
                                ,<a href="/gua/54.htm">第五十四卦 雷泽归妹</a>
                                ,<a href="/gua/55.htm">第五十五卦 雷火丰</a>
                                ,<a href="/gua/56.htm">第五十六卦 火山旅</a>
                                ,<a href="/gua/57.htm">第五十七卦 巽为风</a>
                                ,<a href="/gua/58.htm">第五十八卦 兑为泽</a>
                                ,<a href="/gua/59.htm">第五十九卦 风水涣</a>
                                ,<a href="/gua/60.htm">第六十卦 水泽节</a>
                                ,<a href="/gua/61.htm">第六十一卦 风泽中孚</a>
                                ,<a href="/gua/62.htm">第六十二卦 雷山小过</a>
                                ,<a href="/gua/63.htm">第六十三卦 水火既济</a>
                                ,<a href="/gua/64.htm">第六十四卦 火水未济</a>
])
 const allTheGua = ()=> {
    console.log(
        guaxiang.map((item:any)=>item.split(">"))
    )
 }
  
  return (
    <View className={classNames('64gua')}>
     <View>

     </View>
        </View>
  )
}
