import api from "./api"; 

interface PromoCodeService { 
    postPromoCodeValidation(payload: any) : Promise<any>
  } 
  
  const Service: PromoCodeService = {
    postPromoCodeValidation: async (payload: any) => {
      const response = await api.get(`/get_referral_code_check?referral_code=${payload.code}`);
  
      const rtn: any = {
        success: true,
        data: response.data
      };
  
      return rtn;
    }
  } 
  
  export default Service;