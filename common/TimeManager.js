import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')


export const timezoneToDate = (date) => {
    return (
        moment(date).format('dddd Do MMMM YYYY')
    )
}

export const timezoneToTime = (date) => {
    return (
        moment(date).format('LT')
    )
}

export const timezoneToDateTime = (date) => {
    return (
        moment(date).format('lll')
    )
}

export const timezoneToRelativeTime = (date) => {
    return (
        moment(date).fromNow()  
    )
}

export const timezoneToDynamicTime = (date) => {
    return (
        moment(date).calendar()
    )
}





