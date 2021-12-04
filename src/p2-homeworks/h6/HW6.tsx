import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import css from './main.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        const restoredValue = restoreState('editable-span-value', 'No saved data')
        setValue(restoredValue)
    }

    return (
        <div >
            <hr/>

            {/*should work (должно работать)*/}
            <div className={css.span}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                    spanClassName={css.input}
                />
            </div>
            <SuperButton onClick={save} className={css.btns}>save</SuperButton>
            <SuperButton onClick={restore} className={css.btns}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
