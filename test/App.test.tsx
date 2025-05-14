import React from 'react'
import {describe, test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import App from '../src/App'
import userEvent from '@testing-library/user-event'

describe('<App/>', () => {
    // test('should work', () => {
    //     render(<App/>)

    //     expect(screen.getByText('Prueba tecnica react'))
    //     .toBeDefined()
    // })

    test('should add new items and remove them', async ()  => {
        const user = userEvent.setup() //creamos el usuario  de testing
    
        render(<App/>) //renderizamos la app

        //buscar el inopu y validar su existencia
        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        //buscar el formulario y validar su existencia
        const form = screen.getByRole('form') //con el aria-label definido en el form este infiere que el rolm es 'form'
        expect(form).toBeDefined()

        //buscra el button que dispara el submit
        const button = form.querySelector('button')
        expect(button).toBeDefined()

        //esperamos al que el usario teclee el nuevo item y o envie a travez del buttonm
        const randomText = crypto.randomUUID()
        await user.type(input, randomText)
        await user.click(button!)

        const list = await screen.getByRole('list')
        expect(list).toBeDefined()
        expect(list.childNodes.length).toBe(3)

        const item = screen.getByText(randomText)
        expect(item).toBeDefined()
        
        const removeButton = item.querySelector('delete')
        expect(removeButton).toBeDefined()

        await user.click(removeButton!)

    })
})