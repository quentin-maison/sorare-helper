
export function inputValidation (managerName) {

    if (managerName === 'no' || managerName === '') {
        return false
    } else {
        return true
    }
    
}