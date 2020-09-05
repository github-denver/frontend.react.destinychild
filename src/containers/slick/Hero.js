import React, { useEffect } from 'react'
import Hero from '../../components/slick/Hero'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { list } from '../../modules/hero/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props

  const { hero, error, loading } = useSelector(({ hero, loading }) => {
    const data = {}

    if (hero.data !== null) {
      data.hero = hero.data.list
    }

    return {
      hero: data.hero,
      error: hero.error,
      loading: loading['hero/HERO']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const number = typeof location.pathname.split('/').splice(-1)[0] !== 'string' ? location.pathname.split('/').splice(-1)[0] : 1
    console.log('containers → slick → [Hero.js] → number: ', number)

    dispatch(list({ category: attribute.category, number }))
  }, [dispatch, location.pathname, attribute.category])

  return <Hero hero={hero} error={error} loading={loading} />
}

export default withRouter(Result)
