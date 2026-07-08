class Wizard:
    mana = 100

    def __init__(self, name, spells=[]):
        self.name = name
        self.spells = spells
        # self.mana = Wizard.base_mana