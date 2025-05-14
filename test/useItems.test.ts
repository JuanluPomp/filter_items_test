import {describe, test, expect} from 'vitest'
import {renderHook} from '@testing-library/react'
import {useItem} from '../src/hooks/useItem'

describe('useItems hook', () => {
    test('should add and delete item', () => {
        const {result} = renderHook(() => useItem())
        console.log(result.current)
        expect(result.current.items.length).toBe(3)
        
    })
})