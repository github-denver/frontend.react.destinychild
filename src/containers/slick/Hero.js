import React, { useEffect } from 'react'
import Hero from '../../components/slick/Hero'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { heroList, heroListInitial } from '../../modules/hero/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props

  const { list, error, loading } = useSelector(({ heroList, loading }) => {
    const temp = {}

    if (heroList.data !== null) {
      temp.heroList = heroList.data.list
    }

    return {
      list: temp.heroList,
      error: heroList.error,
      loading: loading['hero/HERO_LIST']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(heroList({ category: attribute.category }))

    return () => {
      // console.log('hero/HERO_LIST 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(heroListInitial())
    }
  }, [dispatch, location.pathname, attribute.category])

  return <Hero category={attribute.category} hero={list} error={error} loading={loading} />
}

export default withRouter(Result)
