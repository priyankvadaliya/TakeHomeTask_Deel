class CreatenewContract {
   
    /// <summary> Gets the Create new Contract link of left menu element.</summary>
    CreateNewContractLink = "//p[contains(text(),'Create A Contract')]";

    /// <summary> Gets the Contract type Header element.</summary>
    COntractTypeHeading = "//*[contains(text(),'Contract Type')]";

    /// <summary> Gets the Fixed Rate Banner element.</summary>
    FixedRateBanner = "//div//h4[text()='Fixed Rate']";

    /// <summary> Gets the Contract name input element.</summary>
    ContractName = "(//label[text()='Contract name']//following::input)[1]"

    /// <summary> Gets the Contract tax Residence dropdown element.</summary>
    Contractortaxresidence = "(//div[contains(@class, 'deel-ui__select__control')])[2]"

    /// <summary> Gets the JobTitle dropdown element.</summary>
    JobTitle = "(//div[contains(@class, 'deel-ui__input-component')])[3]";

    /// <summary> Gets the Senioritylevel dropdown element.</summary>
    Senioritylevel = "(//div[contains(@class, 'deel-ui__select__control')])[3]";

    /// <summary> Gets the ScopeofWork element.</summary>
    ScopeofWork = "//textarea";

    /// <summary> Gets the Contractor start date calaender element.</summary>
    ContractorStartDateCalender = "//div[@class='deel-ui__calendar-input-container__input']";

    /// <summary> Gets the Next button element.</summary>
    NextBtn = "//div[contains(text(),'next')]//ancestor::button";

    /// <summary> Gets the Currency Dropdown button element.</summary>
    Currency = "(//div[contains(@class, 'deel-ui__select__control')])[1]";

    /// <summary> Gets Rate input element.</summary>
    Rate = "//input[@name='rate']";

    /// <summary> Gets Payment Fequence Dropdown element.</summary>
    PaymentFequence = "(//div[contains(@class, 'deel-ui__select__value-container')])[2]"

    /// <summary> Gets add a special clause button element.</summary>
    Addaspecialclause= "//div[contains(text(),'add a special clause')]//ancestor::button";

    /// <summary> Gets special clause Textarea to add additional details element.</summary>
    SpecialClauseTextArea = "//div[@class='textarea-container']/textarea";

    /// <summary> Gets Crete Contract button element.</summary>
    Createcontract = "//div[contains(text(),'create contract')]//ancestor::button";

    /// <summary> Gets Review and Sign button element.</summary>
    Reviewandsign = "//div[contains(text(),'review & sign')]//ancestor::button";
}
export default CreatenewContract;