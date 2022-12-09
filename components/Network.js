import React, { Component } from 'react'
import fs from 'fs'
import CytoscapeComponent from 'react-cytoscapejs'
import path from 'path'

const root = process.cwd()

function fileNameFilter(fileName) {
  // Filter out xxxx-xx-xx in the file name
  const dateRegex = /\d{4}-\d{2}-\d{2}/
  // Filter out .webm .png .jpg .jpeg .gif
  const extensionRegex = /\.(webm|png|jpg|jpeg|gif)$/
  return !dateRegex.test(fileName) && !extensionRegex.test(fileName)
}

export default class Network extends Component {
    render() {
        return (
            <div>
                <h1>Network</h1>
            </div>
        )
    }
}