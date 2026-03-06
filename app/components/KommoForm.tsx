'use client'
import { useEffect } from 'react'

export default function KommoForm() {
  useEffect(() => {
    const initScript = document.createElement('script')
    initScript.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1654767",hash:"889b5253c085539f9f7abc4e413ca622",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`
    document.body.appendChild(initScript)

    const extScript = document.createElement('script')
    extScript.src = 'https://forms.kommo.com/forms/assets/js/amoforms.js?1772826296'
    extScript.async = true
    extScript.charset = 'utf-8'
    document.body.appendChild(extScript)
  }, [])

  return null
}
