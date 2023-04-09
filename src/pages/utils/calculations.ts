export function PMT(ir: number, np: number, pv: number, fv?: number, type?: 0|1) {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0)
        return -(pv + fv)/np;

    pvif = Math.pow(1 + ir, np);
    pmt = - ir * (pv * pvif + fv) / (pvif - 1);

    if (type === 1)
        pmt /= (1 + ir);

    return pmt;
}

export function NPER(rate: number, payment: number, present: number, future?: number, type?: number) {
    // Initialize type
    type = (typeof type === 'undefined') ? 0 : type;
  
    // Initialize future value
    future = (typeof future === 'undefined') ? 0 : future;
  
    // Return number of periods
    const num = payment * (1 + rate * type) - future * rate;
    const den = (present * rate + payment * (1 + rate * type));
    return Math.log(num / den) / Math.log(1 + rate);
  }