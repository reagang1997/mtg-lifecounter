import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { SET_LEAGUES, SELECTED_LEAGUE } from '../../utils/actions';


export default {
    findAllLeagues: async function(dispatch){
        const allLeagues = await axios.get('/api/league/');
        dispatch({
            type: SET_LEAGUES,
            leagues: allLeagues.data
        });
        return allLeagues.data;
    },

    updateDescription: async function(descrip, id, dispatch){
        const updatedLeague = await axios.put(`/api/league/description/${id}`, {description: descrip});
        dispatch({
            type: SELECTED_LEAGUE,
            league: updatedLeague.data
        })
        return updatedLeague.data;
    },

    updateCar: async function(car, id, dispatch){
        const updatedLeague = await axios.put(`/api/league/car/${id}`, {car: car});
        dispatch({
            type: SELECTED_LEAGUE,
            league: updatedLeague.data
        })
        return updatedLeague.data;
    }

}