import fetch from 'isomorphic-fetch';

export const discoverActivities = async (lat, lon, category, start, end) => {
    try {
        let response = await fetch(`https://localhost:8080/?lat=${lat}&lon=${lon}&category=${category}&start=${start}&end=${end}`, {
            method: 'get'
        });

        if (response.ok && response.status === 200) {
            return response.json();
        }
        return [];

    } catch (e) {
        throw new Error(e);
    }
}