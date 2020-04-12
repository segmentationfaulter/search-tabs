import { render } from 'lit-html'

import { openTabsList } from './ui'

chrome.tabs.query({}, function (tabs: chrome.tabs.Tab[]) {
  render(openTabsList({ tabs, inputChangeHandler, submitHandler }), document.body)

  function submitHandler(event: Event) {
    console.log(event)
  }

  function inputChangeHandler(event: InputEvent) {
    const { value } = event.target as HTMLInputElement
    const filterdTabs =
      tabs.filter(tab => tab.title?.toLowerCase().includes(value.toLowerCase()) || tab.url?.toLowerCase().includes(value.toLowerCase()))
    render(openTabsList({ tabs: filterdTabs, inputChangeHandler, submitHandler }), document.body)
  }
})
